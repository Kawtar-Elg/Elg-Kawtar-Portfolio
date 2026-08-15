import { useQuery } from "@tanstack/react-query";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  GITHUB_PROFILE_FALLBACK,
  GITHUB_REPOS_FALLBACK,
  type GitHubProfile,
  type GitHubRepo,
} from "@/lib/github";

// GitHub's unauthenticated REST API allows 60 requests/hour per IP, so the
// data is cached aggressively and the static snapshot is served immediately
// while the live request resolves (or if it fails entirely).
const SHARED_OPTIONS = {
  staleTime: 1000 * 60 * 30,
  gcTime: 1000 * 60 * 60,
  retry: 1,
  refetchOnWindowFocus: false,
} as const;

export interface GitHubQueryResult<T> {
  data: T;
  /** True once live API data has replaced the bundled snapshot. */
  isLive: boolean;
  isLoading: boolean;
}

export function useGitHubProfile(): GitHubQueryResult<GitHubProfile> {
  const query = useQuery({
    queryKey: ["github", "profile"],
    queryFn: ({ signal }) => fetchGitHubProfile(signal),
    ...SHARED_OPTIONS,
  });

  return {
    data: query.data ?? GITHUB_PROFILE_FALLBACK,
    isLive: query.isSuccess,
    isLoading: query.isLoading,
  };
}

export function useGitHubRepos(): GitHubQueryResult<GitHubRepo[]> {
  const query = useQuery({
    queryKey: ["github", "repos"],
    queryFn: ({ signal }) => fetchGitHubRepos(signal),
    ...SHARED_OPTIONS,
  });

  return {
    data: query.data ?? GITHUB_REPOS_FALLBACK,
    isLive: query.isSuccess,
    isLoading: query.isLoading,
  };
}
