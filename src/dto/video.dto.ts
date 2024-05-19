export class CreateVideoDto {
  readonly title: string;
  readonly url: string;
}

export class UpdateVideoDto {
  readonly title?: string;
  readonly url?: string;
}
