import React from 'react';

interface TestComponentProps {
  title: string;
  description?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({ title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      {description && (
        <p className="text-gray-600">{description}</p>
      )}
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          测试按钮
        </button>
      </div>
    </div>
  );
};

export default TestComponent; 