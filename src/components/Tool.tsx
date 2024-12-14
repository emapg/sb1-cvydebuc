import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ToolProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Tool({ icon, title, description }: ToolProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
      <div className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
        <span className="text-sm font-medium">Check now</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </div>
    </div>
  );
}