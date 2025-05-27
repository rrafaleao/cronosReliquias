export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  year: string;
  period: 'victorian' | 'edwardian' | 'artdeco' | 'midcentury' | 'vintage';
  style: 'pocket' | 'wristwatch' | 'pendulum' | 'chronograph' | 'marine';
  mechanism?: string;
  origin?: string;
  condition?: string;
}

export interface FilterOptions {
  period: string;
  style: string;
}