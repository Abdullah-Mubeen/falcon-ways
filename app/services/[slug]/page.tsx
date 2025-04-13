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
    <div className="max-w-4xl mx-auto py-24 px-6">
      <Link href="/#services" className="inline-flex items-center mb-8 text-sm text-gray-500 hover:text-black transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </Link>
      <div className="mb-10">
        <service.icon className="h-12 w-12 mb-6" />
        <h1 className="text-4xl font-light mb-4">{service.title}</h1>
        <p className="text-lg text-gray-600">{service.desc}</p>
      </div>
      <div className="prose lg:prose-lg max-w-none text-gray-800">
        <p>{service.content}</p>

        {service.features && (
          <ul className="mt-6 list-disc pl-6 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
