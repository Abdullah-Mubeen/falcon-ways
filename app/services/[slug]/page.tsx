import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-75 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>

        {/* Icon and Description */}
        <div className="flex items-start gap-4 mb-10">
          <div className="p-4 rounded-lg bg-gray-100">
            <service.icon className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-2">{service.desc}</h2>
            <p className="text-gray-600">{service.content}</p>
          </div>
        </div>

        {/* Features Section */}
        {service.features && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 border rounded-md hover:shadow-sm transition"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
