export type TError = {
  data: {
    success: boolean;
    stack: string;
    message: string;
  };
  status: number;
};
