export interface User {
    id: number;
    name: string;
    pseudo: string;
    promo: string;
    balance: number;
}

export interface ApiInterface {
    [x: string]: any;
    logout(): Promise<void>;
    login(): Promise<void>;
    refreshState(): void;
    fetchMe(): Promise<User>;  
    
}


