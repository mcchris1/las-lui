/*
Building #11 is undergoing a major renovation. Implement a query to close all requests from apartments in this building. 

Apartments
|AptID       | int         |
|UnitNumber  | varchar(10) |
|BuildingID  | int         |

Buildings
|BuildingID  | int         |
|ComplexID   | int         |
|Address     | varchar(100)|

Requests
|RequestID   | int         |
|Status      | varchar(100)|
|AptID       | int         |
|Description | varchar(500)|

Complexes
|ComplexID   | int         |
|ComplexName | varchar(100)|

AptTenants
|TenantID    | int         |
|AptID       | int         |

Tenants
|TenantID    | int         |
|TenantName  | varchar(100)|

Hints:
#431: First try to get a list of the IDs (just the IDs) of all the relevant apartments.
*/
