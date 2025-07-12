declare global {
  interface Window {
    google: typeof google;
    _gsiInitialized?: boolean;
  }

  namespace google.accounts.id {
    interface CredentialResponse {
      credential: string;
      select_by: string;
      clientId: string;
    }
  }
}

export {};
