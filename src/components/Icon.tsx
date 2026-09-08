import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number | string;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20, ...props }) => {
  // Access Lucide icon dynamically by name
  const iconsMap = LucideIcons as unknown as Record<string, React.ComponentType<LucideIcons.LucideProps>>;
  const IconComponent = iconsMap[name] || LucideIcons.Code;

  return <IconComponent className={className} size={Number(size)} {...props} />;
};
