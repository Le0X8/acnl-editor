export class BrowserStorage {
  private listeners: Record<string, ((value: unknown) => void)[]> = {};

  constructor() {
    navigator.storage.persist().then((persistent) => {
      if (persistent) {
        console.log('Storage will not be cleared except by explicit user action');
      } else {
        alert('Storage may be cleared by the browser under storage pressure.');
      }
    });
  }

  get(key: string): unknown {
    return JSON.parse(localStorage.getItem(key) || 'null');
  }

  set(key: string, value: unknown) {
    const val = JSON.stringify(value);
    try {
      localStorage.setItem(key, val);
    } catch {
      alert('Storage is full! Cleaning up...');
      localStorage.clear();
      try {
        localStorage.setItem(key, val);
      } catch {
        alert('Failed to save data, browser denied storage access');
      }
    }
    if (this.listeners[key]) {
      this.listeners[key].forEach((callback) => callback(value));
    }
  }

  watch(key: string, callback: (value: unknown) => void) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(callback);
  }
}