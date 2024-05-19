import React, { useEffect, useState } from "react";
import { Container, VStack, Text, Box, Spinner, HStack, Image } from "@chakra-ui/react";
import { FaBoxOpen } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetching data from /product endpoint
    setTimeout(() => {
      const mockProducts = [
        { id: 1, name: "Product 1", description: "Description for product 1", image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTYxMzEzOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 2, name: "Product 2", description: "Description for product 2", image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTYxMzEzOTd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, name: "Product 3", description: "Description for product 3", image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTYxMzEzOTd8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      ];
      setProducts(mockProducts);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Product List
        </Text>
        {loading ? (
          <Spinner size="xl" />
        ) : (
          products.map((product) => (
            <Box key={product.id} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <HStack spacing={4}>
                <Image src={product.image} boxSize="100px" objectFit="cover" alt={product.name} />
                <VStack align="start">
                  <Text fontSize="lg" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text>{product.description}</Text>
                </VStack>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
