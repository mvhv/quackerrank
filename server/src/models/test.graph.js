import neo4j from 'neo4j-driver';

const uri = 'bolt://localhost:7687';
const username = 'neo4j';
const password = 'password';

const driver = neo4j.driver(uri, neo4j.auth.basic(username, password));
const session = driver.session();
const personName = 'Alice';

try {
    const result = await session.run(
        'CREATE (a:Person {name: $name}) RETURN a',
        { name: personName }
    );

    const singleRecord = result.records[0];
    const node = singleRecord.get(0);

    console.log(node.properties.name);
} finally {
    await session.close();
}

await driver.close();