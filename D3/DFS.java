import java.util.*;

public class DFS{
  public static void main(String[] arg){
    int n = 5;
    List<Integer>[] adj = new List<>[n];
    
  }

  private void printNodes(List<Integer> adj,int n){
    boolean[] visited = new boolean[n];
    for(int i = 0;i<n;i++){
      dfs(i,adj,visited);
    }
  }

  private void dfs(int root,List<Integer>[] adj,boolean[] visited){
    System.out.println(root);
    for(int next : adj[root]){
      if(!visited[next]){
        visited[next] = true;
        dfs(next,adj,visited)
      }
    }
  }
}