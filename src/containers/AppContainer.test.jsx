/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/mode';
import { rest } from 'msw';
import AppContainer from './AppContainer';

const server = setupServer(
  rest.get('https://damp-cove-34137.herokuapp.com/api/quotes/3', (req, res, ctx) => {
    return res(ctx.json([
      {
        id: 1,
        name: 'Dale Cooper',
        quoteText: `Dale Cooper: Diane, 7:30 am, February twenty-fourth. Entering town of Twin Peaks. 
                    Five miles south of the Canadian border, twelve miles west of the state line. 
                    Never seen so many trees in my life. As W.C. Fields would say, I'd rather be here than Philadelphia. 
                    It's fifty-four degrees on a slightly overcast day. Weatherman said rain. 
                    If you could get paid that kind of money for being wrong sixty percent of the time it'd beat working. 
                    Mileage is 79,345, gauge is on reserve, I'm riding on fumes here, I've got to tank up when I get into town. 
                    Remind me to tell you how much that is. Lunch was $6.31 at the Lamplighter Inn. 
                    That's on Highway Two near Lewis Fork. That was a tuna fish sandwich on whole wheat, a slice of cherry pie and a cup of coffee. 
                    Damn good food. Diane, if you ever get up this way, that cherry pie is worth a stop.`,
        quoteTextOnly: `Diane, 7:30 am, February twenty-fourth. Entering town of Twin Peaks. 
                        Five miles south of the Canadian border, twelve miles west of the state line. 
                        Never seen so many trees in my life. As W.C. Fields would say, I'd rather be here than Philadelphia. 
                        It's fifty-four degrees on a slightly overcast day. Weatherman said rain. 
                        If you could get paid that kind of money for being wrong sixty percent of the time it'd beat working. 
                        Mileage is 79,345, gauge is on reserve, I'm riding on fumes here, I've got to tank up when I get into town. 
                        Remind me to tell you how much that is. Lunch was $6.31 at the Lamplighter Inn. That's on Highway Two near Lewis Fork. 
                        That was a tuna fish sandwich on whole wheat, a slice of cherry pie and a cup of coffee. 
                        Damn good food. Diane, if you ever get up this way, that cherry pie is worth a stop.`
      }
    ]));
  })
);

describe('<AppContainer />', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  it('checks that AppContainer renders', async () => {
    render(<AppContainer />);

    const urlBar = screen.getByPlaceholderText('Enter a URL');
    userEvent.type(urlBar, 'https://damp-cove-34137.herokuapp.com/api/quotes/3')

    const getButton = screen.getByTestId('getButton');
    userEvent.click(getButton);

    const go = await screen.findAllByRole('button', { text: 'Go' });
    userEvent.click(go[0]);

    return waitFor(() => {
      const ul = screen.getByRole('list', { name: 'requests' });
      expect(ul).not.toBeEmptyDOMElement();
      expect(ul).toMatchSnapshot();
    });
  });
});
