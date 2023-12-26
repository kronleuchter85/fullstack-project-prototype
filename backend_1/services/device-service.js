module.exports = class DeviceService {

    constructor(){}

    getAllDevices() {

        let devices =  [
            {   'id': 1,
                'name':'Device 1',
                'lastReadingValue':123,
                'location': '123141;312313',
                'state':true,
                'lastReadingDate':'2023-12-01',
                'valveId': 1,
                'valveName':'Kitchen'}
          ];
    
          return devices;
    }
    
};


