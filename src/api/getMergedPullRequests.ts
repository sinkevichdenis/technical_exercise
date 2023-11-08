import { Octokit } from '@octokit/rest';


type ArgsType = {
  owner: string,
  repo: string,
  per_page?: number,
  since?: string,
};

export type ResultType ={
  id: number,
  closed_at: string,
};

type FuncType = (args: ArgsType) => Promise<ResultType[]>;

const octokit = new Octokit({});

export const getMergedPullRequests: FuncType = async({
  owner,
  repo,
  per_page = 100,
  since = '',
}) => {
  return await octokit.paginate('GET /repos/{owner}/{repo}/issues', {
    owner,
    repo,
    state: 'closed',
    direction: 'desc',
    per_page,
    ...(since.length ? { since } : {}),
  },
  (response) => response.data.map((issue) =>
    ({
      id: issue.id,
      closed_at: issue?.closed_at || '',
    }))
  );
};
