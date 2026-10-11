export type ActionResponse<T = unknown> = {
  is_success: boolean;
  status_code: number;
  response_payload: T | null;
  error_descriptor: {
    code: string;
    message: string;
    field_errors?: Record<string, string[]>;
  } | null;
};