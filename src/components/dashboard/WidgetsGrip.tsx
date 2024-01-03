'use client'
import React from 'react'
import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetsGrip = () => {
  const isCart = useAppSelector(state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={`${isCart}`}
        subTitle='Productos agregados'
        label="Contador"
        icon = {<IoCartOutline size={70} className="text-blue-600" />}
        href='/dashboard/counter'
      />
    </div>
  )
}
