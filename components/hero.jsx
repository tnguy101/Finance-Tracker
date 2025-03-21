import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='pb-20 px-4'>
        <div>
            <h1>
                Manage Your Finanaces <br/> with Intelligence
            </h1>
            <p>
                An AI-powered financial management platform that helps you track, analyze, and budget your spending with real-time insights.
            </p>
            <div>
                <Link href="/dashboard">
                    <Button size='lg' className='px-8'>
                        Get Started
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button size='lg' variant='outline' className='px-8'>
                        Second Button
                    </Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image src='/banner.png' width={1280} height={720} alt='Dashboard Preview' className='rounded-lg shadow-2xl border mx-auto' priority/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;