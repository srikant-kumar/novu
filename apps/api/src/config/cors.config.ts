import { INestApplication } from '@nestjs/common';
import { HttpRequestHeaderKeysEnum } from '@novu/application-generic';

const ALLOWED_ORIGINS_REGEX = new RegExp(process.env.FRONT_BASE_URL || '');

export const corsOptionsDelegate: Parameters<INestApplication['enableCors']>[0] = function (req: Request, callback) {
  const corsOptions: Parameters<typeof callback>[1] = {
    origin: false as boolean | string | string[],
    preflightContinue: false,
    maxAge: 86400,
    allowedHeaders: Object.values(HttpRequestHeaderKeysEnum),
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  };

  corsOptions.origin = '*';

  console.log('CORS options:', corsOptions.origin);

  callback(null as unknown as Error, corsOptions);
};

function enableWildcard(req: Request): boolean {
  return isDevelopmentEnvironment() || isWidgetRoute(req.url) || isInboxRoute(req.url) || isBlueprintRoute(req.url);
}

function isWidgetRoute(url: string): boolean {
  return url.startsWith('/v1/widgets');
}

function isInboxRoute(url: string): boolean {
  return url.startsWith('/v1/inbox');
}

function isBlueprintRoute(url: string): boolean {
  return url.startsWith('/v1/blueprints');
}

function isDevelopmentEnvironment(): boolean {
  return ['test', 'local'].includes(process.env.NODE_ENV || '');
}

function origin(req: Request): string {
  return (req.headers as any)?.origin || '';
}
