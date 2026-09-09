export interface SportType {
  name: string;
  players: number;
}

export interface UserType {
  id: number;
  name: string;
  age: number;
  city: string;
  isAdmin: boolean;
}

export interface ProfileType {
  id: number;
  name: string;
  role: string;
  isActive: boolean;
  isPremium: boolean;
}
