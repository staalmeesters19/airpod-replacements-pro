import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { currentLanguage, switchLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1.5 px-2">
          <Globe className="h-4 w-4" />
          <span className="uppercase text-xs font-medium">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem 
          onClick={() => switchLanguage('nl')}
          className={currentLanguage === 'nl' ? 'bg-secondary' : ''}
        >
          <span className="mr-2">🇳🇱</span>
          Nederlands
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => switchLanguage('en')}
          className={currentLanguage === 'en' ? 'bg-secondary' : ''}
        >
          <span className="mr-2">🇬🇧</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
