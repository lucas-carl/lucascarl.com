import React from "react";

export interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface StringProps {
  [name: string]: string | React.ReactNode;
}

export interface artistItemProps {
  [name: string]: string | React.ReactNode;
  external_urls: StringProps;
}
export interface WrapperProps {
  children?: React.ReactNode;
}

export interface ChildrenStringProps {
  children?: React.ReactNode;
  title?: string;
  dir?: string;
  date?: string;
}
export interface Data {
  [key: string]: any;
}
