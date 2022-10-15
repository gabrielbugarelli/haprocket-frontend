import { createContext, ReactNode, useContext, useState } from 'react';

type BreadcrumbContextData = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

type BreadcrumbProviderProps = {
  children: ReactNode;
}

const BreadcrumbContext = createContext<BreadcrumbContextData>({} as BreadcrumbContextData);

export const BreadcrumbProvider = ({ children }: BreadcrumbProviderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <BreadcrumbContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}

export const useVerifyBreadcrumbs = () => {
  const context = useContext(BreadcrumbContext);
  return context;
}