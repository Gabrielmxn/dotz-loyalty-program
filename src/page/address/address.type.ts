export interface Address {
  id: number;
  user_id: number;
  street: string;
  number?: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zip_code: string;
  created_at: Date;
}
