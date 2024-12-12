const events = require('../backend/events.js');
const { events: getAllEvents, event: getEventById } = require('../backend/api.js');


const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res); 
  return res;
};

describe('API Tests', () => {
 
  test('should return all events', () => {
    const req = {};  
    const res = mockResponse();  
    getAllEvents(req, res);  

    expect(res.json).toHaveBeenCalledWith(events);  
  });

  
  test('should return a single event by ID', () => {
    const req = { param: { eventId: 1 } };  
    const res = mockResponse();  
    getEventById(req, res); 

    expect(res.json).toHaveBeenCalledWith(events[0]);  
  });
});
