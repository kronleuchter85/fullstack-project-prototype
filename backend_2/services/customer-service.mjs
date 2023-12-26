class CustomerService {

    constructor(){}

    getAllCustomers() {

        let customers =  [
            {   'id': 1,
                'name':'Pablo',
                'lastname': 'Gonzalez',
                'dateOfBirth': '1984-01-01'}
          ];
    
          return customers;
    }
    
};


export {CustomerService }