import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksKartochka extends Struct.ComponentSchema {
  collectionName: 'components_blocks_kartochka';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430';
  };
  attributes: {
    description: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksKnopka extends Struct.ComponentSchema {
  collectionName: 'components_blocks_knopka';
  info: {
    displayName: '\u041A\u043D\u043E\u043F\u043A\u0430';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSsylka extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.kartochka': BlocksKartochka;
      'blocks.knopka': BlocksKnopka;
      'blocks.ssylka': BlocksSsylka;
    }
  }
}
