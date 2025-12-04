import { Users, Clock, MapPin } from 'lucide-react';

const SocialProofBadge = () => {
  return (
    <section className="py-8 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Bekend van badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Voorheen Airpods-handel</p>
              <p className="text-xs text-muted-foreground">Bekend van onze winkel in Amsterdam</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border" />

          {/* Ervaring */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">3+ jaar ervaring</p>
              <p className="text-xs text-muted-foreground">Specialist in losse AirPods</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border" />

          {/* Klanten */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Duizenden klanten</p>
              <p className="text-xs text-muted-foreground">In heel Nederland & Europa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBadge;
