export interface Profile {
    id: string
    firstName: string
    lastName: string
    middleName?: string
    fullName: string
    email: string
    phone: string
    dob: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    zip: string
    progress: number

    // Spiritual Background
    godsWorkings?: string[]
    salvationBrief: string
    churchName: string
    churchAddress: string
    pastorName: string
    pastorEmail: string
    pastorPhone: string
    reason: string

    // Health Information
    healthConditions?: string[]
    healthIssueDescription?: string
}

export interface User {
    fullName: string;
    email: string;
    password: string;
    role: string;
}

export interface Student {
    id: string;
    program: string
    scholarshipReason: string
    platform: string
}

export interface UserData {
    id?: string
    name: string
    email: string
    dob: string
    matNo: string;
    username: string
    password?: string;
}

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never }

type FilterFlags<Base, Condition> = {
    [Key in keyof Base]:
    Base[Key] extends Condition ? Key : never
};

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;
type OptionalKeys<T> = Exclude<keyof T, NonNullable<keyof SubType<Undefined<T>, never>>>
export type AllOptionalKeys = OptionalKeys<UserData> 

export type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
export type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
