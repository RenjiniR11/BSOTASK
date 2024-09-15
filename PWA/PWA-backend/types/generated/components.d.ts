import type { Schema, Attribute } from '@strapi/strapi';

declare module '@strapi/types' {
  export module Shared {}
}
declare module '@strapi/plugin-users-permissions/admin' {
  const usersPermissions: any;
  export default usersPermissions;
}
