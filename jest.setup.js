import 'react-native-gesture-handler/jestSetup';
import { mockOctokitResponse } from './src/__mocks__/octokit.mock';


jest.mock('@octokit/rest', () => ({
  Octokit: jest.fn(() => ({
    paginate: jest.fn().mockResolvedValue(mockOctokitResponse),
  })),
}));

jest.mock('react-native-chart-kit', () =>({
  BarChart: jest.fn(),
}));
