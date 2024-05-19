export class CreateSessionDto {
  readonly videoId: string;
  readonly userId: string;
  readonly timestamp: Date;
}

export class UpdateSessionDto {
  readonly videoId?: string;
  readonly userId?: string;
  readonly timestamp?: Date;
}
