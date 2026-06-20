interface ErrorResponse {
  message: string;
  statusCode: number;
}

interface SuccessResponse<T> {
  data: T;
  statusCode: 200;
}

type Response<T> = ErrorResponse | SuccessResponse<T>;

export type { Response, ErrorResponse, SuccessResponse };
