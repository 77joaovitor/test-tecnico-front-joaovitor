import { MouseEventHandler, ReactNode, SetStateAction } from "react";

export interface Props {
  children: ReactNode;
}
interface Dob {
  date: string;
  age: number;
}

interface Location {
  street: unknown;
  city: string;
  state: string;
  country: string;
  postcode: number;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Registered {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

export interface User {
  cell: string;
  dob: Dob;
  email: string;
  gender: string;
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  phone: string;
  picture: Picture;
  registered: Registered;
}

export interface UserResponse {
  user: User | never;
}

export interface Gender {
  gender: string;
}

export interface UserContext {
  users: User[] | never[];
  setUsers: Function;
  Profile: Function;
  addProfile: Function;
  setAddProfilePosition: Function;
  addProfilePosition: boolean;
  modalOpen: boolean;
  setModalOpen: Function;
  detailProfile: User | null;
  setDetailProfile: Function;
}

export interface OldUsers {
  oldUsers: User[] | never;
}

export interface OnClick {
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface OnClickButtonView {
  onClick: MouseEventHandler<HTMLDivElement> | any;
}

export interface UserDetailProps {
  userDetail: string | undefined | number;
  keyName: string;
}
