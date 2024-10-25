import { getUserAvailability } from '@/actions/availability'
import React from 'react'
import { defaultAvailability } from './data';
import AvailabilityForm from './_components/availability-form';

const AvailabilityPage = async () => {
    const avalability = await getUserAvailability();
  return (
    <AvailabilityForm initialData={avalability || defaultAvailability}/>
  )
}

export default AvailabilityPage