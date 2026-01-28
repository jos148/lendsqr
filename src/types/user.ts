export interface User {
  id: string;
  email: string;
  username: string;
  phone: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  roles: string[];
  apiKey: string;
  organization: string;
  dateJoined: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  dob: string;
  gender: string;
  about: string;
  address: string;
  organisation: string;
  maritalStatus: string;
  children: string;
  residenceType: string;
  location: {
    lat: number;
    long: number;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    name: string;
    phone: string;
    email: string;
    relationship: string;
  };
}
