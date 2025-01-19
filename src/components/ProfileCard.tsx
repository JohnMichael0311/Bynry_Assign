import React from 'react';
import { Profile } from '@/types/profile';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface ProfileCardProps {
  profile: Profile;
  onSelect: (profile: Profile) => void;
  isSelected: boolean;
}

const ProfileCard = ({ profile, onSelect, isSelected }: ProfileCardProps) => {
  return (
    <Card className={`transition-all duration-200 ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader className="relative pb-0">
        <img 
          src={profile.photo} 
          alt={profile.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{profile.description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{`${profile.address.city}, ${profile.address.country}`}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant={isSelected ? "secondary" : "default"}
          onClick={() => onSelect(profile)}
        >
          {isSelected ? 'Hide Location' : 'Show Location'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;