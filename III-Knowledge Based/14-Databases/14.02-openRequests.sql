/*
Write a SQL query to get a list of all buildings and the number of open requests (Requests in which status equals 'Open').

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

Hints: #411
*/
