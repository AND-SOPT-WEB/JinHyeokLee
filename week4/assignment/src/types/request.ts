export interface RegisterUserRequest {
  username: string;
  password: string;
  hobby: string;
}

export interface UpdateUserRequest {
  hobby?: string;
  password?: string;
}
