import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Xidmət Detal Səhifəsi</h1>
        <p className="text-2xl text-cyan-400 mt-4 capitalize">
          {slug.replace('-', ' ')}
        </p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;