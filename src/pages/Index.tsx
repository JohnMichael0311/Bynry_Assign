import React, { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import Map from '@/components/Map';
import { Profile } from '@/types/profile';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Sample data - in a real app this would come from an API
const sampleProfiles: Profile[] = [
  {
    id: "1",
    name: "John Doe",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description: "Software Engineer passionate about building great products",
    address: {
      street: "123 Tech Street",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      coordinates: {
        lat: 37.7749,
        lng: -122.4194
      }
    },
    details: {
      email: "john@example.com",
      interests: ["Programming", "Hiking", "Photography"]
    }
  },
  {
    id: "2",
    name: "Jane Smith",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    description: "UX Designer creating beautiful and functional interfaces",
    address: {
      street: "456 Design Avenue",
      city: "New York",
      state: "NY",
      country: "USA",
      coordinates: {
        lat: 40.7128,
        lng: -74.0060
      }
    },
    details: {
      email: "jane@example.com",
      interests: ["Design", "Art", "Travel"]
    }
  }
];

const Index = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = sampleProfiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    profile.address.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Profile Explorer</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search profiles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Profiles</h2>
            <div className="space-y-4">
              {filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onSelect={(p) => setSelectedProfile(p.id === selectedProfile?.id ? undefined : p)}
                  isSelected={profile.id === selectedProfile?.id}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:sticky lg:top-6 h-[500px] lg:h-[calc(100vh-8rem)]">
            <Map
              selectedProfile={selectedProfile}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;