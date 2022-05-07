import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LocalStorageService {
    private storage: Storage;

    constructor() {
        this.storage = window.localStorage;
    }

    public ObterStorage(key: string): any {
        return this.storage.getItem(key);
    }

    public ExcluirStorage(key: string): void {
        return this.storage.removeItem(key);
    }

    public CriarStorage(key: string, value: string): void {
        return this.storage.setItem(key, value);
    }

    public ValidarStorage(key: string): boolean {
        return this.storage.getItem(key) != null ? true : false;
    }
}