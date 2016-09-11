// const graph = {
//   links: [
//     {source: 0, target: 1},
//     {source: 0, target: 2},
//     {source: 0, target: 3},
//     {source: 0, target: 4},
//     {source: 0, target: 5},
//     {source: 0, target: 6},
//     {source: 1, target: 7},
//     {source: 2, target: 8},
//     {source: 3, target: 9},
//     {source: 5, target: 10},
//     {source: 5, target: 11},
//     {source: 5, target: 12},
//     {source: 6, target: 13},
//     {source: 6, target: 14},
//     {source: 6, target: 15},
//     {source: 6, target: 16},
//   ],
//   nodes: [
//     {size: 60, index: 0, id: 'Andy Coenen', type: 'circle'},
//     {size: 20, index: 1, id: 'Molly Larkin', type: 'circle'},
//     {size: 20, index: 2, id: 'Eric Luttrell', type: 'circle'},
//     {size: 20, index: 3, id: 'Matt Conrad', type: 'circle'},
//     {size: 10, index: 4, id: 'Richard Ferguson', type: 'circle'},
//     {size: 40, index: 5, id: 'Luke Davis', type: 'circle'},
//     {size: 50, index: 6, id: 'Ben Swardlick', type: 'circle'},
//     {size: 20, index: 7, id: 'Catherine Larkin', type: 'circle'},
//     {size: 10, index: 8, id: 'Ray Boff', type: 'circle'},
//     {size: 10, index: 9, id: 'Mal King', type: 'circle'},
//     {size: 10, index: 10, id: 'Henry Wong', type: 'circle'},
//     {size: 10, index: 11, id: 'David Ernst', type: 'circle'},
//     {size: 10, index: 12, id: 'Spencer Hundley', type: 'circle'},
//     {size: 10, index: 13, id: 'Ben Bodkin', type: 'circle'},
//     {size: 10, index: 14, id: 'Porter Robinson', type: 'circle'},
//     {size: 10, index: 15, id: 'Casey Gray', type: 'circle'},
//     {size: 10, index: 16, id: 'Erin Royal', type: 'circle'},
//   ],
// }
export default (graph) => {
  const idsToIndex = {}
  const output = {
    links: [],
    nodes: [],
  }

  graph.nodes().forEach((id, index) => {
    idsToIndex[id] = index
    const node = graph.node(id)
    output.nodes.push({
      id,
      name: node.displayName,
      size: Object.keys(node.connections || {}).length * 10 + 10,
      type: 'circle',
    })
  })

  graph.edges().forEach(edge => {
    const { w, v } = edge
    output.links.push({
      source: idsToIndex[v],
      target: idsToIndex[w],
    })
  })

  return output
}