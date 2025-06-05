#!/bin/bash

echo "=== Contoso Blazor App End-to-End Integration Test ==="
echo "Testing Blazor app functionality and backend integration..."
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Test counter
TOTAL_TESTS=0
PASSED_TESTS=0

test_blazor_endpoint() {
    local description="$1"
    local url="$2"
    local expected_status="$3"
    local check_content="$4"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo -n "Testing: $description ... "
    
    response=$(curl -s -w "\n%{http_code}" "$url")
    status_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | head -n -1)
    
    if [ "$status_code" = "$expected_status" ]; then
        if [ ! -z "$check_content" ]; then
            if echo "$body" | grep -q "$check_content"; then
                echo -e "${GREEN}✓ PASS${NC} (Status: $status_code, Content found)"
                PASSED_TESTS=$((PASSED_TESTS + 1))
            else
                echo -e "${YELLOW}⚠ PARTIAL${NC} (Status: $status_code, but content '$check_content' not found)"
            fi
        else
            echo -e "${GREEN}✓ PASS${NC} (Status: $status_code)"
            PASSED_TESTS=$((PASSED_TESTS + 1))
        fi
    else
        echo -e "${RED}✗ FAIL${NC} (Expected: $expected_status, Got: $status_code)"
    fi
    echo
}

test_backend_connectivity() {
    local description="$1"
    local url="$2"
    local expected_status="$3"
    
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    echo -n "Testing: $description ... "
    
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status_code" = "$expected_status" ]; then
        echo -e "${GREEN}✓ PASS${NC} (Status: $status_code)"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "${RED}✗ FAIL${NC} (Expected: $expected_status, Got: $status_code)"
        echo -e "   ${YELLOW}Note: Backend may not be running on port 8080${NC}"
    fi
    echo
}

echo "=== Prerequisites Check ==="

# Check if backend is running
test_backend_connectivity "Backend API availability" "http://localhost:8080/api/posts" "200"

echo "=== Blazor App Tests ==="

# Test Blazor app endpoints
test_blazor_endpoint "Blazor App Home Page" "http://localhost:3031/" "200" "Contoso.BlazorApp"
test_blazor_endpoint "Blazor App JavaScript Files" "http://localhost:3031/_framework/blazor.web.js" "200"
test_blazor_endpoint "Blazor App CSS" "http://localhost:3031/_content/Microsoft.AspNetCore.Components.Web/BlazorInputFile.css" "200"
test_blazor_endpoint "Custom CSS" "http://localhost:3031/app.css" "200"
test_blazor_endpoint "Modal JavaScript" "http://localhost:3031/js/modal.js" "200"

# Test Blazor app routing
test_blazor_endpoint "Home Route" "http://localhost:3031/" "200" "Contoso Outdoor Social"
test_blazor_endpoint "Search Route" "http://localhost:3031/search" "200" "Search"
test_blazor_endpoint "Profile Route" "http://localhost:3031/profile" "200" "Profile"

echo -e "\n${BLUE}=== Manual Testing Checklist ===${NC}"
echo "The following should be tested manually in the browser:"
echo "1. 🌐 Open http://localhost:3031 in browser"
echo "2. 👤 Test name input modal (if no user is set)"
echo "3. 📝 Test creating a new post using the floating action button"
echo "4. ❤️  Test liking/unliking posts"
echo "5. 💬 Test adding comments to posts"
echo "6. ✏️  Test editing and deleting comments"
echo "7. 🔍 Test search functionality"
echo "8. 👤 Test profile page and logout"
echo "9. 📱 Test responsive design on mobile"
echo "10. 🔄 Test navigation between pages"
echo

echo "=== Test Summary ==="
echo -e "Total Tests: $TOTAL_TESTS"
echo -e "Passed: ${GREEN}$PASSED_TESTS${NC}"
echo -e "Failed: ${RED}$((TOTAL_TESTS - PASSED_TESTS))${NC}"

if [ $PASSED_TESTS -eq $TOTAL_TESTS ]; then
    echo -e "\n${GREEN}🎉 All tests passed! The integration is working correctly.${NC}"
    exit 0
else
    echo -e "\n${YELLOW}⚠️  Some tests failed. Check the details above.${NC}"
    exit 1
fi
