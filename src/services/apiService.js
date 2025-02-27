
// API Services for fetching data
const API_DELAY = 800; 


const MOCK_PETS = [
  {
    id: 'pet-1',
    name: 'Max',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 'pet-2',
    name: 'Luna',
    type: 'Cat',
    breed: 'Siamese',
    age: 2,
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const MOCK_POLICIES = [
  {
    id: 'policy-1',
    petId: 'pet-1',
    type: 'Premium Coverage',
    status: 'Active',
    startDate: '2023-05-15',
    endDate: '2024-05-14',
    coverageLimit: 5000,
    deductible: 250,
    monthlyPremium: 45.99,
    coverageDetails: [
      { item: 'Accidents', covered: true, limit: 5000 },
      { item: 'Illnesses', covered: true, limit: 4000 },
      { item: 'Routine Checkups', covered: true, limit: 1000 },
      { item: 'Vaccinations', covered: true, limit: 500 },
      { item: 'Dental', covered: true, limit: 800 },
    ]
  },
  {
    id: 'policy-2',
    petId: 'pet-2',
    type: 'Basic Coverage',
    status: 'Pending Renewal',
    startDate: '2023-01-10',
    endDate: '2024-01-09',
    coverageLimit: 3000,
    deductible: 150,
    monthlyPremium: 32.50,
    coverageDetails: [
      { item: 'Accidents', covered: true, limit: 3000 },
      { item: 'Illnesses', covered: true, limit: 2000 },
      { item: 'Routine Checkups', covered: false, limit: 0 },
      { item: 'Vaccinations', covered: true, limit: 300 },
      { item: 'Dental', covered: false, limit: 0 },
    ]
  }
];

const MOCK_CLAIMS = [
  {
    id: 'claim-1',
    policyId: 'policy-1',
    petId: 'pet-1',
    date: '2023-08-15',
    amount: 450.75,
    status: 'Approved',
    description: 'Emergency visit for paw injury',
    documents: ['invoice.pdf', 'vet_report.pdf'],
    reimbursementDate: '2023-08-25',
    reimbursementAmount: 350.25
  },
  {
    id: 'claim-2',
    policyId: 'policy-1',
    petId: 'pet-1',
    date: '2023-11-02',
    amount: 225.00,
    status: 'Pending',
    description: 'Annual checkup and vaccinations',
    documents: ['receipt.pdf'],
    reimbursementDate: null,
    reimbursementAmount: null
  },
  {
    id: 'claim-3',
    policyId: 'policy-2',
    petId: 'pet-2',
    date: '2023-09-20',
    amount: 750.50,
    status: 'Rejected',
    description: 'Dental cleaning procedure',
    documents: ['invoice.pdf', 'treatment_plan.pdf'],
    reimbursementDate: null,
    reimbursementAmount: null,
    rejectionReason: 'Dental not covered under Basic plan'
  }
];

const MOCK_INSIGHTS = [
  {
    id: 'insight-1',
    type: 'pet-care',
    title: 'Summer Care for Golden Retrievers',
    content: 'Keep your Golden Retriever cool during summer months with extra water and shade. Avoid walking on hot pavement to protect their paws.',
    petType: 'Dog',
    petBreed: 'Golden Retriever',
    createdAt: '2023-06-01'
  },
  {
    id: 'insight-2',
    type: 'discount',
    title: '15% Off Annual Vaccinations',
    content: 'Get 15% off annual vaccinations at PetCare Clinic until the end of this month.',
    validUntil: '2023-12-31',
    code: 'VACCINE15'
  },
  {
    id: 'insight-3',
    type: 'cost-saving',
    title: 'Upgrade to Premium',
    content: 'Based on your claim history, upgrading to our Premium plan could save you $200 annually.',
    savingsAmount: 200,
    recommendedAction: 'Upgrade plan'
  }
];

// Simulate API responses
const delay = (ms = API_DELAY) => new Promise(resolve => setTimeout(resolve, ms));

// API for Pets
export const fetchPets = async (userId) => {
  await delay();
  return MOCK_PETS;
};

export const fetchPetById = async (petId) => {
  await delay();
  return MOCK_PETS.find(pet => pet.id === petId);
};

// API for Policies
export const fetchPolicies = async (userId) => {
  await delay();
  return MOCK_POLICIES;
};

export const fetchPolicyById = async (policyId) => {
  await delay();
  return MOCK_POLICIES.find(policy => policy.id === policyId);
};

export const fetchPolicyByPetId = async (petId) => {
  await delay();
  return MOCK_POLICIES.find(policy => policy.petId === petId);
};

// API for Claims
export const fetchClaims = async (userId) => {
  await delay();
  return MOCK_CLAIMS;
};

export const fetchClaimsByPolicyId = async (policyId) => {
  await delay();
  return MOCK_CLAIMS.filter(claim => claim.policyId === policyId);
};

export const submitClaim = async (claimData) => {
  await delay(1500);
  
  const newClaim = {
    id: `claim-${Math.random().toString(36).substr(2, 9)}`,
    status: 'Pending',
    date: new Date().toISOString().split('T')[0], 
    reimbursementDate: null,
    reimbursementAmount: null,
    ...claimData
  };
  

  return newClaim;
};

// API for Insights
export const fetchInsights = async (petType, petBreed) => {
  await delay();
  
  // Filter insights based on pet attributes if provided
  if (petType || petBreed) {
    return MOCK_INSIGHTS.filter(insight => {
      if (insight.petType && petType && insight.petType !== petType) {
        return false;
      }
      if (insight.petBreed && petBreed && insight.petBreed !== petBreed) {
        return false;
      }
      return true;
    });
  }
  
  return MOCK_INSIGHTS;
};

// Search functionality
export const searchPolicies = async (query) => {
  await delay();
  
  if (!query) return MOCK_POLICIES;
  
  const lowerCaseQuery = query.toLowerCase();
  
  return MOCK_POLICIES.filter(policy => {
    // Get associated pet for this policy
    const pet = MOCK_PETS.find(p => p.id === policy.petId);
    
    // Search in policy details
    return (
      policy.id.toLowerCase().includes(lowerCaseQuery) ||
      policy.type.toLowerCase().includes(lowerCaseQuery) ||
      policy.status.toLowerCase().includes(lowerCaseQuery) ||
      (pet && pet.name.toLowerCase().includes(lowerCaseQuery)) ||
      (pet && pet.breed.toLowerCase().includes(lowerCaseQuery))
    );
  });
};
