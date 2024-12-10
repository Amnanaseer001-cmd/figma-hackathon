import * as React from 'react';
import { NavigationItemProps } from '../app/contact/types';

export const NavigationItem: React.FC<NavigationItemProps> = ({ label, width }) => (
  <div className={`overflow-hidden self-stretch my-auto w-[${width}]`}>
    {label}
  </div>
);