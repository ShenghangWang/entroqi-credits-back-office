// Retains the original console store/API contract; the credential itself is
// exchanged for a short-lived HttpOnly staff session, never browser storage.
import { defineStore } from 'pinia';
import { request } from '@/api/http';
import type { LoginRequest, UserInfo } from '@/types/auth';
type Reply<T> = { data: T };
export const useAuthStore = defineStore('auth', {
  state: () => ({ userInfo: null as UserInfo | null, initialized: false, agentWorkflowsEnabled: false, userProvisioningEnabled:false }),
  getters: { role: state => state.userInfo?.role ?? null, permissions: state => state.userInfo?.permissions ?? [], userName: state => state.userInfo?.displayName ?? '未登录', isLoggedIn: state => Boolean(state.userInfo) },
  actions: {
    async hydrate() { if(this.initialized)return; this.initialized=true; try { const data=(await request.get<Reply<{userInfo:UserInfo;features:{agentsEnabled:boolean;userProvisioningEnabled:boolean}}>>('/auth/me')).data;this.userInfo=data.userInfo;this.agentWorkflowsEnabled=data.features.agentsEnabled;this.userProvisioningEnabled=data.features.userProvisioningEnabled; } catch { this.userInfo=null; } },
    async login(payload: LoginRequest) { const data=(await request.post<Reply<{userInfo:UserInfo;features:{agentsEnabled:boolean;userProvisioningEnabled:boolean}}>>('/auth/login',payload)).data;this.userInfo=data.userInfo;this.agentWorkflowsEnabled=data.features.agentsEnabled;this.userProvisioningEnabled=data.features.userProvisioningEnabled; return this.userInfo; },
    async logout(persist=true) { if(persist)await request.post('/auth/logout',{});this.userInfo=null; },
  },
});
