'use client';
import { CompanyContext } from '@/context/company-context';
import { useContext, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import FormCard from '@/components/ui/form-card';

export default function Home() {
  const router = useRouter();
  const { searchValue, companies, setCompany, selectedStatuses } =
    useContext(CompanyContext);
  const [itemsToShow, setItemsToShow] = useState(9);
  const filteredData = companies.filter((company) => {
    const matchesStatus = selectedStatuses
      ? selectedStatuses.includes(company?.contract)
      : true;

    const matchesSearch = searchValue
      ? company.company.toLowerCase().includes(searchValue.toLowerCase())
      : true;

    return matchesStatus && matchesSearch;
  });

  const currentItems = filteredData.slice(0, itemsToShow);
  const hasMore = itemsToShow < filteredData.length;
  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6);
  };

  const handleClick = (company) => {
    setCompany(company);
    router.push(`/jobs/${company.id}`);
  };

  return (
    <div className="-mt-10 grid items-center justify-items-center size-full !pt-0 max-[376px]:p-6 p-12 px-10 lg:px-40 gap-16">
      <FormCard />
    </div>
  );
}
